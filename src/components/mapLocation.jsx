const MapLocation = () => {
  return (
    <>
      <section className="map overflow-hidden h-[60vh] rounded-md phoneL:h-[50vh]">
        <div className="w-full h-full rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31597.29070917414!2d5.082174341540669!3d8.135917481202824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104820536e944c21%3A0x9be99a6533276362!2sOmu-Aran%20251103%2C%20Kwara!5e0!3m2!1sen!2sng!4v1738684487547!5m2!1sen!2sng"
            width={"100%"}
            height={"100%"}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default MapLocation;
