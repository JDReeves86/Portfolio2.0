import React, { useState } from "react";
import Columns from "./Columns";
import ColumnSolo from "./ColumnSolo";
import Picture from "./Picture";
import H1Component from "./H1Component";
import PComponent from "./PComponent";
import IconContainer from "./IconContainer";
import Tabs from "./Tabs";

function ProjectDetails({ values, action }) {
  const [detailState, setDetailState] = useState("details");
  return (
    <div>
      <Columns>
        <ColumnSolo>
          <H1Component
            value={values.title}
            attr={`has-text-centered is-size-2 my-3 projectTitle`}
          />
        </ColumnSolo>
      </Columns>

      <Columns attr="is-8 is-variable has-text-centered my-6">
        <ColumnSolo attr="ml-6 is-6">
          <Picture attr="image" alt="screenshot" src={values.image} />
        </ColumnSolo>
        <ColumnSolo attr="mr-6 is-5">
          <Tabs project={values} action={action} state={setDetailState}/>
          {detailState === "details" && (
            <PComponent attr="is-size-5 m-4 p-4">
              {values.description}
            </PComponent>
          )}
          {detailState === "tech" && (
            <>
            <PComponent attr="mt-6 is-size-5">{`Technologies used: ${values.technologies}`}</PComponent>
            <IconContainer attr="m-6 p-6">
              {values.icons}
            </IconContainer>
            </>
            
          )}
        </ColumnSolo>
      </Columns>
    </div>
  );
}

export default ProjectDetails;
