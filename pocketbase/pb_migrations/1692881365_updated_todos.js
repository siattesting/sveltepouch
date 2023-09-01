/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5t2tv8ueuf7q2wc")

  // remove
  collection.schema.removeField("ofuaekva")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5t2tv8ueuf7q2wc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ofuaekva",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
