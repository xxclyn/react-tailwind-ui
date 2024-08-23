import Section from "@doc/components/section/section";
import Type from "./type";

export default () => {
  return (
    <Section title={Type.title} markdowncontent={Type.md}>
      <Type.component></Type.component>
    </Section>
  );
};
