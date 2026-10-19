import ApiCard from "./ApiCard";

export default function ApiGrid({ countries }) {
  return (
    <div className="api-grid">
      {countries.map((country) => (
        <ApiCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}
