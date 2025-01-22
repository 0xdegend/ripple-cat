const text = "This is some text for the panels.";
export const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p className="collapse-answer">{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];
