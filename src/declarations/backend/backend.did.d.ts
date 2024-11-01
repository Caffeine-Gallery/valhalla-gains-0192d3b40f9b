import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Testimonial {
  'title' : string,
  'content' : string,
  'author' : string,
}
export interface _SERVICE {
  'getTestimonials' : ActorMethod<[], Array<Testimonial>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
