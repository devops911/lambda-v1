const pruebaHandler = async (event: any = {}): Promise<any> => {
    
    
  
    return {
      statusCode: 200,
      body: "hello from lambda!",
    };
  };
  
  export { pruebaHandler };
  