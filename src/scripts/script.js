const stripe = Stripe(
  "pk_live_51OS4DvEixHlr2hL8LrnLan29l69T9BNFXEbH6siEDhiPAa0QsjWyEf3UuR69bgbRNdIUUhKW7V64NsgWciyFWypM008RA0QbyZ"
);

const takeData = async () => {
  const resp = await fetch("../data/data.json", { method: "GET" });
  const data = await resp.json();
  console.log({ data });
  return data;
};

takeData();
