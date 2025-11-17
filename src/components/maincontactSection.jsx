import ContactContent from "./ContactContent";
import MapLocation from "./mapLocation";

const MainContact = () => {
  return (
    <>
      <section className="flex justify-center py-16 bg-gray-50 phoneL:py-12 phoneP:py-8">
        <div className="contact-container w-[90%] max-w-6xl flex flex-col gap-12 laptop:w-[95%] phoneL:w-full phoneL:px-4 phoneP:gap-8">
          <ContactContent />
          <MapLocation />
        </div>
      </section>
    </>
  );
};

export default MainContact;