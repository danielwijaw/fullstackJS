'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('articles', {
    id: { type: 'bigint', primaryKey: true, autoIncrement: true },
    title: { type: 'string', length: 100, notNull: true },
    content: { type: 'string', length: 250, notNull: true },
    created_at: { type: 'timestamp', defaultValue: 'CURRENT_TIMESTAMP'},
    updated_at: { type: 'timestamp', defaultValue: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'},
  });
};

exports.down = function(db) {
  return db.dropTable('articles');
};

exports._meta = {
  "version": 1
};
