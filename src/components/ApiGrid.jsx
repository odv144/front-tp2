import ApiCard from "./ApiCard";

export default function ApiGrid({ obras }) {
  return (
    <div className="api-grid">
      {obras.map((obra) => (
        <ApiCard key={obra.id} obra={obra} />
      ))}
    </div>
  );
}
