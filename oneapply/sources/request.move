module oneapply::request {
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::TxContext;
    use std::string::String;

    struct Request has key, store {
        id: UID,
        creator: address,
        required_types: vector<String>,
    }

    public fun create_request(required_types: vector<String>, ctx: &mut TxContext): UID {
        let request = Request {
            id: object::new(ctx),
            creator: tx_context::sender(ctx),
            required_types,
        };
        let uid = object::uid_to_inner(&request.id);
        transfer::share_object(request);
        uid
    }
}