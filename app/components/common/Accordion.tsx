import { IProduct } from "@/types/IProduct";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  title: IProduct["title"];
  children: React.ReactNode;
}

const Accordion: React.FC<Props> = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isActive ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isActive]);

  return (
    <AccordionWrapper>
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        {title}
        <span style={{ float: "right" }}>{isActive ? "▲" : "▼"}</span>
      </AccordionTitle>
      <AccordionContent style={{ maxHeight: height }} ref={contentRef}>
        {children}
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  margin-bottom: 1em;
`;

const AccordionTitle = styled.button`
  background-color: #fff;
  color: #000f;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid #ddd;
  font-size: 15px;
  border-radius: 4px;

  &:hover {
    background-color: #e9e9e9;
  }
`;

const AccordionContent = styled.div`
  background-color: white;
  overflow: hidden;
  transition: max-height 0.2s ease;
  padding: 0 18px;
  line-height: 1.5;
  color: #555555;
  font-size: 13px;
  border-radius: 4px;
`;
