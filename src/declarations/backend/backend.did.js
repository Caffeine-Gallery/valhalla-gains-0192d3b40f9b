export const idlFactory = ({ IDL }) => {
  const Testimonial = IDL.Record({
    'title' : IDL.Text,
    'content' : IDL.Text,
    'author' : IDL.Text,
  });
  return IDL.Service({
    'getTestimonials' : IDL.Func([], [IDL.Vec(Testimonial)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
