profesor: Alvaro Cordero
clase: proyecto_1
semana: 3
fecha: 25-5-2020
---

### Investigar MongoDB

- que es ? 
  - que significa document-oriented (todo se guarda en documentos)
  - que significa NoSQL (no esquema definido)

- caracteristicas ?
  - rows doesn't need to have a schema defined beforehand
  - data model
  - Key components
    - _id
    - Collection
    - Cursor
    - Data base
    - Document
    - Field
    - Json 

- por que usar MongoDB ?
  - se puede usar casi con cualquier lenguaje 
  - very flexible and adaptable to real business world situation and requirements
  - supports searching by field, range queries, and regular expression searches. 
  - any field in a MongoDB document can be indexed
  - replication - high availability with replica sets


Populate:
db.inventory.insertMany([
   { item: "journal", qty: 25, status: "A", size: { h: 14, w: 21, uom: "cm" }, tags: [ "blank", "red" ] },
   { item: "notebook", qty: 50, status: "A", size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank" ] },
   { item: "paper", qty: 10, status: "D", size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank", "plain" ] },
   { item: "planner", qty: 0, status: "D", size: { h: 22.85, w: 30, uom: "cm" }, tags: [ "blank", "red" ] },
   { item: "postcard", qty: 45, status: "A", size: { h: 10, w: 15.25, uom: "cm" }, tags: [ "blue" ] }
]);

Find all:
db.inventory.find({}).pretty()

Find some:
db.inventory.find( { status: "D" } );
