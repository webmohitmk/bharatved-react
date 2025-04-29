import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">About Us</h1>
      <p className="lead text-center">Learn more about our company and mission.</p>
      
      <div className="my-4">
        <p>
          BharatVed Healthcare was founded with the aim to explore the role of herbs to fight various ailments such as diabetes, cancer, auto-immune diseases, arthritis, etc. BharatVed owns many clinically tested, AYUSH-approved formulations with the help of which we have been able to provide treatment to over 80,000 patients over the past three decades, without side effects.
        </p>
        
        <p>
          Apart from these formulations, BharatVed also provides premium, high-concentration herbs under its brand name Honeyline. BharatVed Healthcare is the parent company of major brands such as Sino Vedic Healthcare Private Limited, Cancertame Private Limited & Honeyline. BharatVed owns and operates clinics all over India and has 13 AYUSH Approved formulations & more than 30 trademarks in its arsenal.
        </p>
      </div>

      <h2 className="mt-4">Our Formulations</h2>
      <p>The various formulations owned by BharatVed include:</p>

      <ul className="list-group">
        <li className="list-group-item"><strong>Immunotone:</strong> An immune enhancing, antistress, and rejuvenating formulation prescribed in early stages of cancer and to help prevent cancer in high-risk individuals.</li>
        <li className="list-group-item"><strong>Immunotone Plus:</strong> A form of Herbal Immunotherapy that enhances the activity of immune cells and promotes autophagy.</li>
        <li className="list-group-item"><strong>Cancertame:</strong> Our most versatile OTC medicine for cancer, formulated after extensive research over two decades.</li>
        <li className="list-group-item"><strong>Oncotame:</strong> Helps to fight cancer at every step (genesis, growth & spread) without side effects.</li>
        <li className="list-group-item"><strong>Oncotame-S:</strong> The more potent variant prescribed to recurrent/relapsed cases of cancer.</li>
        <li className="list-group-item"><strong>Oncotame Plus:</strong> Advanced formulation for recurrent and metastatic cancer (Stage IV).</li>
        <li className="list-group-item"><strong>Agetame:</strong> A rejuvenation therapy promoting feelings of tranquillity and enhancing memory & intelligence.</li>
        <li className="list-group-item"><strong>Atherotame:</strong> Improves local blood supply and reduces cardiac risks.</li>
        <li className="list-group-item"><strong>Cardiovedic:</strong> A heart tonic that helps maintain heart health.</li>
        <li className="list-group-item"><strong>Diabetame:</strong> Controls blood sugar levels and prevents complications of diabetes.</li>
        <li className="list-group-item"><strong>Hepatovedic:</strong> Prescribed for diseases of the liver and gastrointestinal tract.</li>
        <li className="list-group-item"><strong>Hormovedic:</strong> Helpful in treating hormonal imbalances.</li>
        <li className="list-group-item"><strong>Immunovedic:</strong> Enhances the body's natural resistance to disease-causing agents.</li>
        <li className="list-group-item"><strong>Nephrovedic:</strong> Prescribed for various diseases of the kidney and urinary bladder.</li>
        <li className="list-group-item"><strong>Neurovedic:</strong> Strengthens the nervous system and improves cognitive functions.</li>
        <li className="list-group-item"><strong>Orthovedic:</strong> Helps prevent deterioration in joints and rejuvenates damaged cartilage.</li>
      </ul>

      <h2 className="mt-4">Honeyline</h2>
      <p>In addition to these formulations, BharatVed Healthcare provides premium, high-concentration, single ingredient products under its brand name Honeyline, such as:</p>
      
      <ul className="list-group">
        <li className="list-group-item">Honeyline Ashwagandha with 7.5% withanolides</li>
        <li className="list-group-item">Honeyline Shilajit with 7% Fulvic Acid (w/w)</li>
        <li className="list-group-item">Honeyline Turmeric with 97% Curcuminoids w/ Piperine</li>
      </ul>

      <p className="mt-4">We also provide special/custom formulations tailored to patient needs.</p>
    </div>
  );
};

export default About;
