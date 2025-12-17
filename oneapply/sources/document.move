module oneapply::document {
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use std::string::String;

    struct Document has key {
        id: UID,
        owner: address,
        blob_id: String,
        doc_type: String,
        country: String,
        uploaded_at: u64,
    }

    public entry fun mint(blob_id: String, doc_type: String, country: String, ctx: &mut TxContext) {
        let doc = Document {
            id: object::new(ctx),
            owner: tx_context::sender(ctx),
            blob_id,
            doc_type,
            country,
            uploaded_at: tx_context::epoch_timestamp_ms(ctx),
        };
        transfer::transfer(doc, tx_context::sender(ctx));
    }
}