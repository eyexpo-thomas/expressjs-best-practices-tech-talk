declare global {
  namespace Express {
    interface Request {
      baz?: string;
    }
  }
}

export {};
