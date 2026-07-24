import React from "react";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        padding: "30px"
      }}
    >
      <div
        style={{
          borderRight: "3px solid green",
          paddingRight: "30px"
        }}
      >
        <CourseDetails />
      </div>

      <div
        style={{
          borderRight: "3px solid green",
          paddingRight: "30px"
        }}
      >
        <BookDetails />
      </div>

      <div>
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;