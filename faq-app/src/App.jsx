import FAQ from "./components/FAQ";

function App() {
  const questions = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days.",
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping takes 3-5 business days.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries.",
    },
  ];

  return (
    <>
      <FAQ questions={questions} />
    </>
  );
}

export default App;
