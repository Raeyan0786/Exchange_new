import Select, { StylesConfig } from "react-select";
export const SelectStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      border: "none",
      fontSize: "1rem",
      color: "#696767",
      fontWeight: 400,
      boxShadow: state.isFocused ? "0 0 0 1px blue" : "none",
      '::placeholder': {
        color: '#696767',
      },
      height: "2.7372rem",
      width: "26.125rem",
      background: "#F0F0F0",
      borderRadius: "0.3125rem",
      "@media (min-width: 320px)": {
        width: "85%",
        marginLeft:"auto",
        marginRight:"auto",
        height:"3rem"
      },
      "@media (min-width: 640px)": {
        width: "100%",
      },
      "@media (min-width: 768px)": {
        width: "100%",
        height:"3rem"
      },
      "@media (min-width: 1024px)": {
        width: "100%",
      },
      "@media (min-width: 1280px)": {
        width: "100%",
        height:"2.7372rem",
        
      },
  
    }),
    placeholder: (styles) => ({
        ...styles,
        color: '#696767',
        textIndent: '0.625rem',
      }),
    
  };