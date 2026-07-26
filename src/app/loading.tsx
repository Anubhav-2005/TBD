export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div
        className="border-primary size-7 animate-spin rounded-full border-2 border-t-transparent"
        aria-label="Loading"
      />
    </div>
  );
}
