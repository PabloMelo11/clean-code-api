type HttpResponse<T = any> = {
  statusCode: number;
  data: T;
};

const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.stack,
});

const ok = (data: any): HttpResponse => ({
  statusCode: 500,
  data,
});

export { HttpResponse, serverError, ok };
