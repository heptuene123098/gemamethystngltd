import { useState } from "react";

const MapLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Your business location in Lekki, Lagos
  const businessLocation = {
    lat: 6.465422,
    lng: 3.566448,
    address: "Lekki, Lagos, Nigeria"
  };

  // Get user's current location and open Google Maps
  const openGoogleMapsDirections = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setIsLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        // Create Google Maps URL with user's location as origin
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${businessLocation.lat},${businessLocation.lng}&travelmode=driving`;
        
        // Open in new tab
        window.open(mapsUrl, '_blank', 'noopener,noreferrer');
        
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError("Location access denied. Please enable location permissions to get directions.");
            break;
          case error.POSITION_UNAVAILABLE:
            // If location is unavailable, open Google Maps with just destination
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${businessLocation.lat},${businessLocation.lng}&travelmode=driving`, '_blank');
            break;
          case error.TIMEOUT:
            setError("Location detection timed out. Opening Google Maps...");
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${businessLocation.lat},${businessLocation.lng}&travelmode=driving`, '_blank');
            break;
          default:
            // Fallback - open Google Maps with just destination
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${businessLocation.lat},${businessLocation.lng}&travelmode=driving`, '_blank');
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  return (
    <>
      <section className="map-section w-full">
        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 phoneL:text-sm flex items-start gap-2">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Map Container with Overlay Button */}
        <div className="map-container relative overflow-hidden h-[50vh] rounded-md shadow-lg phoneL:h-[40vh] phoneP:h-[35vh]">
          {/* Get Directions Button - Small overlay */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={openGoogleMapsDirections}
              disabled={isLoading}
              className="bg-webpurple text-white px-4 py-2 rounded-sm font-medium hover:bg-webpurple/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center gap-2 shadow-lg phoneL:px-3 phoneL:py-1.5 phoneL:text-xs"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
                  Loading...
                </>
              ) : (
                <>
                  <span className="text-sm">📍</span>
                  Get Directions
                </>
              )}
            </button>
          </div>

          {/* Map */}
          <div className="w-full h-full rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126845.158425366!2d3.46698234565435!3d6.465422295747756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf6f5d11ac76d%3A0xf6e6e86d36e44fbc!2sLekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1738684487547!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amethyst Nigeria Ltd Location - Lekki, Lagos"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapLocation;