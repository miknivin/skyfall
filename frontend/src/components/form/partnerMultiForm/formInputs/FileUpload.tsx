interface FileUploadDropzoneProps {
  documentType: "license" | "registration";
  onFileUpload?: (document: { name: string; url: string }) => void;
}

const FileUploadDropzone: React.FC<FileUploadDropzoneProps> = ({
  documentType,
  onFileUpload,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (onFileUpload && file) {
      const document = {
        name: file.name,
        url: URL.createObjectURL(file),
      };
      onFileUpload(document);
    }
  };

  return (
    <div className="w-100">
      <label
        htmlFor={`dropzone-file-${documentType}`}
        className="d-flex flex-column justify-content-center align-items-center w-100 border border-2 rounded-3 bg-light cursor-pointer"
        style={{
          height: "16rem",
          borderStyle: "dashed",
          borderColor: "#d1d5db",
          transition: "background-color 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
      >
        <div className="d-flex flex-column align-items-center justify-content-center pt-5 pb-4">
          <i className="fa-solid fa-upload" />

          <p className="mb-2 text-sm text-secondary">
            <span className="fw-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-secondary">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id={`dropzone-file-${documentType}`}
          type="file"
          className="d-none"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileUploadDropzone;
