// types/google-maps.d.ts
declare namespace google.maps.places {
  interface PlaceAutocompleteElementOptions {
    componentRestrictions?: { country: string | string[] };
    types?: string[];
    fields?: string[];
  }

  interface PlaceAutocompleteElement extends HTMLElement {
    getPlace(): google.maps.places.PlaceResult;
    addListener(
      eventName: string,
      handler: () => void
    ): google.maps.MapsEventListener;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    "gmpx-place-autocomplete": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
