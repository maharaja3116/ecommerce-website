import React from "react";
import { useNavigate } from "react-router-dom";

export default function About()

{
    const navigate=useNavigate()
    console.log(navigate)
    return(
        <>
        <h1>Abouts page</h1><br/><br/>

        <p>Welcome to MAHARAJA Mobile <br/><br/>

At MAHARAJA Mobile , <br/><br/>we are passionate about connecting people through the power of mobile technology. Since our inception in 2023,<br/> we have dedicated ourselves to providing high-quality smartphones, tablets, and mobile accessories to our customers at unbeatable prices.<br/><br/>

Our Mission<br/><br/>
We believe that staying connected in today’s fast-paced world should be effortless and affordable for everyone. Our mission is to offer a wide range of the latest mobile devices, ensuring that our customers <br/>have access to cutting-edge technology that fits their needs and budget.<br/>

Why Choose Us?<br/><br/>
Wide Selection: From the latest flagship smartphones to budget-friendly options, we carry a diverse selection of devices to cater to every customer’s preferences.
Quality Products: We only stock products from trusted and reputable brands, ensuring that every device we sell is of the highest quality.
Exceptional Customer Service: Our friendly and knowledgeable staff are always here to assist you in finding the perfect mobile device and answering any questions you may have.
Competitive Pricing: We strive to offer the best prices on all our products, so you can stay up-to-date with the latest technology without breaking the bank.
After-Sales Support: Our relationship with our customers doesn’t end after the sale. We offer comprehensive after-sales support, including repairs, technical assistance, and warranty services.
Our Commitment
At MAHARAJA Mobile , customer satisfaction is our top priority. Whether you’re a tech enthusiast or just looking for a reliable phone for everyday use, we are committed to providing a seamless shopping experience, both in-store and online.<br/><br/>

Thank you for choosing MAHARAJA Mobile . We look forward to serving you!<br/><br/>

</p>
    
        </>
    )
}