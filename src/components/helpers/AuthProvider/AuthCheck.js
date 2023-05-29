import {initialState} from '../../reduxToolkits/slices/userAuth';

const getSuspender = (promise) => {
    let status = "pending";
    let response;
  
    const suspender = promise.then(
      (res) => {
        status = "success";
        response = res;
      },
      (err) => {
        status = "error";
        response = err;
      }
    );
  
    const read = () => {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw response;
        default:
          return response;
      }
    };
  
    return { read };
  };

export const checkLoginState = () => {
    const URL = process.env.SUPABASE_API_URL || "https://ctazhcohbtbhfgpdzplr.supabase.co/auth/v1";
    const APIKEY = process.env.SUPABASE_API_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0YXpoY29oYnRiaGZncGR6cGxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5OTYzODAsImV4cCI6MTk5NDU3MjM4MH0.6NhL9QhiRDwfgDckCMF6NyniaSRFiBnGELf50lz-ANY";
    const PATH = process.env.LOGIN_PATH || "/user";
    const accessToken = localStorage.getItem("access_token") || "";
    if (accessToken === "") {
        return () => {
            const read = () => {
                return initialState;
            };
            return { read }
        };
    }
    const promise = fetch(
        URL + PATH,
        {
            headers: {
                apiKey: APIKEY,
                Authorization: "Bearer " + accessToken
            }
        }
    ).then((response) => response.json()).then((json) => json);

    return getSuspender(promise);
}