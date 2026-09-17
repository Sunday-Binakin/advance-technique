import { siteConfig } from "@/lib/site-config";

function LocationMap() {
  const query = encodeURIComponent(siteConfig.address);

  return (
    <div className="h-80 overflow-hidden rounded-xl ring-1 ring-border lg:h-full">
      <iframe
        title="Our location"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        className="size-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export { LocationMap };
