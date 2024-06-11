import React from "react";
import {
  Hoteldetailscourses,
  Hoteldetailscoursesone,
  Hoteldetailscoursestwo,
  Hoteldetailsdetailcourses,
  Hoteldetailsdetaildiv,
  Hoteldetailsdetailimage,
  Hoteldetailsdetailname,
  Hoteldetailsdetailname2,
  Hoteldetailsdetaliscenter,
  Hoteldetailsdetalismain,
  Hoteldetailsimage1,
  Hoteldetailsimages,
} from "./Allhotelsdetails.styled";

const Allhotelsdetails = (props) => {
  
  return (
    <>
      <Hoteldetailsdetalismain>
        <Hoteldetailsdetaliscenter>
          <Hoteldetailsimages>
<Hoteldetailsimage1>

</Hoteldetailsimage1>
          </Hoteldetailsimages>
          <Hoteldetailsdetailname>
            <p>{props.value.Allhotelsname}</p>
          </Hoteldetailsdetailname>
          <Hoteldetailsdetaildiv>
            <Hoteldetailsdetailimage>
            </Hoteldetailsdetailimage>
            <Hoteldetailsdetailname2>
              <p>{props.value.Allhotelsname}</p>
            </Hoteldetailsdetailname2>
          </Hoteldetailsdetaildiv>
        </Hoteldetailsdetaliscenter>

        {/* <p>{props.value.unive}</p> */}
      </Hoteldetailsdetalismain>
    </>
  );
};

export default Allhotelsdetails;
