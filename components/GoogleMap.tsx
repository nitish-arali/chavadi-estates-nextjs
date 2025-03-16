"use client"; // Mark this as a Client Component

const GoogleMap = () => {
  return (
    <div className="w-full h-96 rounded-lg shadow-md overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5271683739375!2d77.71032197507697!3d13.00206608731611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11b7942ec747%3A0xb9824e65f0ed370f!2sChavadi%20Estates%20Private%20Limited%20Bangalore!5e0!3m2!1sen!2sin!4v1742065692276!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="Google Map showing Chavadi Estates office location"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
