export const imageUrlGenerator = (id: string) => {
  return `${
    import.meta.env.VITE_API_IMG_BASE_URL
  }${id}?fit=max&w=1000&auto=compress,format`;
};
