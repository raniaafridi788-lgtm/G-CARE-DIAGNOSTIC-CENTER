// One entry per service. Add/edit freely — the detail page
// reads from here, so no new files are needed per service.
import image1 from "../assets/image21.png"
import image2 from "../assets/image22.png"
import image3 from "../assets/image23.png"
import image4 from "../assets/image24.png"
import image5 from "../assets/image25.jpg"
import image6 from "../assets/images26.jpg"
import image7 from "../assets/image27.jpg"
import image8 from "../assets/image28.jpg"
import image9 from "../assets/image29.jpg"
import image10 from "../assets/image30.jpg"



export const servicesDetail = {
  "diagnostic-ultrasound": {
    title: "Diagnostic Ultrasound",
    summary: "Real-time imaging using sound waves — safe, radiation-free.",
    image: image1,
    description:
      "Diagnostic ultrasound uses high-frequency sound waves to create real-time images of organs, tissues, and blood flow. It's commonly used to evaluate the abdomen, pelvis, and soft tissues, and is safe for repeated use since it involves no radiation.",
  },
  "digital-x-ray": {
    title: "Digital X-Ray",
    summary: "Fast, low-dose imaging for bones and chest conditions.",
    image: image2,
    description:
      "Digital X-ray produces high-resolution images of bones and internal structures within seconds, at a lower radiation dose than traditional film X-ray. It's often the first step in diagnosing fractures, infections, and chest conditions.",
  },
  "ct-scan": {
    title: "CT Scan",
    summary: "Cross-sectional imaging for detailed internal views.",
    image: image3,
    description:
      "Computed Tomography (CT) combines multiple X-ray images taken from different angles to produce detailed cross-sectional views of the body. It's used to evaluate internal injuries, tumors, and vascular conditions with high precision.",
  },
  mri: {
    title: "MRI",
    summary: "Magnetic resonance imaging for detailed soft-tissue views.",
    image: image4,
    description:
      "Magnetic Resonance Imaging (MRI) uses strong magnetic fields and radio waves to produce detailed images of soft tissues, organs, and joints without radiation. It's especially effective for evaluating the brain, spine, and musculoskeletal system, helping detect conditions that may not be visible on other scans.",
    // prep: [
    //   "Remove all metal objects, jewelry, and accessories before the scan",
    //   "Inform staff of any implants, pacemakers, or metal fragments",
    //   "Fasting may be required for certain MRI types — check your appointment details",
    //   "The scan typically takes 20–45 minutes depending on the area examined",
    // ],
  },
  mammography: {
    title: "Mammography",
    summary: "Specialized breast imaging for early detection.",
    image: image5,
    description:
      "Mammography is a low-dose X-ray exam of breast tissue used for routine screening and diagnostic evaluation. Early detection through regular mammograms significantly improves treatment outcomes.",
  },
  echocardiography: {
    title: "Echocardiography",
    summary: "Ultrasound imaging of the heart's structure and function.",
    image: image6,
    description:
      "Echocardiography uses ultrasound to visualize the heart's chambers, valves, and blood flow in real time. It helps assess heart function and diagnose a range of cardiac conditions non-invasively.",
  },
  "patient-preparation-positioning": {
    title: "Patient Preparation & Positioning",
    summary: "Ensuring accurate, comfortable imaging setup for every scan.",
    image: image7,
    description:
      "Proper preparation and positioning are essential to producing clear, diagnostically useful images. Our team guides patients through each step to ensure comfort, safety, and accuracy during every procedure.",
  },
  "clinical-documentation": {
    title: "Clinical Documentation",
    summary: "Accurate record-keeping supporting patient care.",
    image: image8,
    description:
      "Thorough clinical documentation ensures every imaging study is accurately recorded, tracked, and available to referring physicians — supporting continuity and quality of care.",
  },
  "infection-control-safety-standards": {
    title: "Infection Control & Safety Standards",
    summary: "Strict protocols protecting patients and staff.",
    image: image9,
    description:
      "We follow rigorous infection control and safety protocols across all imaging services, including equipment sterilization, protective measures, and adherence to healthcare safety regulations.",
  },
  "professional-communication-teamwork": {
    title: "Professional Communication and Teamwork",
    summary: "Coordinated care between imaging staff and clinicians.",
    image: image10,
    description:
      "Clear communication and collaboration between technologists, radiologists, and referring physicians ensure timely, accurate diagnoses and a smooth experience for every patient.",
  },
};