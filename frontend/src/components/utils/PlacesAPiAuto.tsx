"use client";

import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";

const libraries = ["places"] as any;

interface Prediction {
  displayName: string;
  formattedAddress: string;
  latitude?: number;
  longitude?: number;
}

interface PlacesAutocompleteProps {
  onLocationSelect?: (locationData: {
    displayName: string;
    formattedAddress: string;
    latitude: number;
    longitude: number;
  }) => void;
  value?: string; // Added to make input controlled
}

const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({
  onLocationSelect,
  value,
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPlaceSelected, setIsPlaceSelected] = useState(false);
  const [selectedPlaceName, setSelectedPlaceName] = useState<string>("");
  const [isFetchingPredictions, setIsFetchingPredictions] = useState(false);

  useEffect(() => {
    setInputValue(value || "");
    // Reset selected state if external value changes
    if (value !== selectedPlaceName) {
      setIsPlaceSelected(false);
      setSelectedPlaceName("");
    }
  }, [value, selectedPlaceName]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
    version: "beta",
  });

  useEffect(() => {
    if (!isLoaded || !inputValue || inputValue.trim() === "") {
      setPredictions([]);
      setIsDropdownOpen(false);
      setIsFetchingPredictions(false);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setIsFetchingPredictions(true);

      try {
        const { AutocompleteSessionToken, AutocompleteSuggestion } =
          (await google.maps.importLibrary(
            "places"
          )) as google.maps.PlacesLibrary;

        const token = new google.maps.places.AutocompleteSessionToken();

        const request = {
          input: inputValue,
          language: "en",
          region: "in",
          sessionToken: token,
        };

        const { suggestions } =
          await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(
            request
          );

        const newPredictions: Prediction[] = [];

        for (let suggestion of suggestions) {
          const placePrediction = suggestion.placePrediction;
          if (placePrediction) {
            const place = placePrediction.toPlace();
            await place.fetchFields({
              fields: ["displayName", "formattedAddress", "location"],
            });

            newPredictions.push({
              displayName: place.displayName || "Unnamed",
              formattedAddress: place.formattedAddress || "No address",
              latitude: place.location?.lat() || 0,
              longitude: place.location?.lng() || 0,
            });
          }
        }

        setPredictions(newPredictions);
        // Only open dropdown if no place is selected or input doesn't match selected place
        setIsDropdownOpen(!isPlaceSelected || inputValue !== selectedPlaceName);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setPredictions([]);
        setIsDropdownOpen(false);
      } finally {
        setIsFetchingPredictions(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [inputValue, isLoaded, isPlaceSelected, selectedPlaceName]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    // If input changes from selected place, allow dropdown to show
    if (isPlaceSelected && newValue !== selectedPlaceName) {
      setIsPlaceSelected(false);
      setIsDropdownOpen(true);
    }
  };

  const handlePredictionClick = (prediction: Prediction) => {
    setInputValue(prediction.displayName);
    setSelectedPlaceName(prediction.displayName);
    setIsPlaceSelected(true);
    setIsDropdownOpen(false);

    if (onLocationSelect && prediction.latitude && prediction.longitude) {
      onLocationSelect({
        displayName: prediction.displayName,
        formattedAddress: prediction.formattedAddress,
        latitude: prediction.latitude,
        longitude: prediction.longitude,
      });
    }
  };

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="position-relative" style={{ maxWidth: "100%" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() =>
          predictions.length > 0 &&
          (!isPlaceSelected || inputValue !== selectedPlaceName) &&
          setIsDropdownOpen(true)
        }
        placeholder="Search your location"
        className="form-control"
      />
      {(isDropdownOpen || isFetchingPredictions) && (
        <ul
          className="dropdown-menu show w-100"
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          {isFetchingPredictions ? (
            <li className="dropdown-item text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </li>
          ) : (
            predictions.map((prediction, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handlePredictionClick(prediction)}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <strong
                    style={{ fontSize: "16px" }}
                    className="address-clamp"
                  >
                    {prediction.displayName}
                  </strong>
                  <div
                    className="text-muted address-clamp"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {prediction.formattedAddress}
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default PlacesAutocomplete;
