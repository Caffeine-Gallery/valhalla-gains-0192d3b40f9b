export const idlFactory = ({ IDL }) => {
  const Testimonial = IDL.Record({
    'title' : IDL.Text,
    'content' : IDL.Text,
    'author' : IDL.Text,
  });
  return IDL.Service({
    'getTestimonials' : IDL.Func([], [IDL.Vec(Testimonial)], ['query']),
    'submitContactForm' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
