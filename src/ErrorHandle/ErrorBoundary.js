import { Component } from "react";


class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError:false 
        };
    }

    static getDerivedStateFromError(error)
    {
      return{
        hasError:true
      }
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log("This is the Error", error, errorInfo);
      }

      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children; 
    }

}

export default index;