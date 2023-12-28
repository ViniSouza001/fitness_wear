const takeData = async () => {
  const resp = await fetch("../data/data.json", { method: "GET" });
  const data = await resp.json();
  return data;
};

takeData();
