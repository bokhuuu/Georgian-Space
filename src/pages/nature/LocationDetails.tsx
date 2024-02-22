interface LocationDetailsProps {
  name: string;
  intro: string;
  // Add more properties for additional details
}

const LocationDetails = ({ name, intro }: LocationDetailsProps) => {
  return (
    <div>
      <h3>{name}zz</h3>
      <p>{intro}vvv</p>
      {/* Add more elements for additional details */}
    </div>
  );
};

export default LocationDetails;
