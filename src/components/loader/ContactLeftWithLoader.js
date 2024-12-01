import React, { Suspense } from "react";
import Loader from "./Loader"; // Import the loader component

const ContactLeft = React.lazy(() => import("./ContactLeftComponent")); // Lazy load your main component

const ContactLeftWithLoader = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ContactLeft />
    </Suspense>
  );
};

export default ContactLeftWithLoader;
