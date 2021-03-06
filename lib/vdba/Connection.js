/**
 * @classdesc A connection.
 * @class vdba.Connection
 * @abstract
 * @protected
 *
 * @param {vdba.Driver} driver  The driver that creates it.
 * @param {Object} config       The configuration.
 */
function Connection(driver, config) {
  /**
   * The driver that creates the connection.
   *
   * @name driver
   * @type {vdba.Driver}
   * @memberof vdba.Connection#
   * @protected
   */
  Object.defineProperty(this, "driver", {value: driver});

  /**
   * The configuration object.
   *
   * @name config
   * @type {Object}
   * @memberof vdba.Connection#
   * @protected
   */
  Object.defineProperty(this, "config", {value: config});
}

/**
 * The open mode: readonly or readwrite.
 *
 * @name mode
 * @type {String}
 * @memberof vdba.Connection#
 */
Connection.prototype.__defineGetter__("mode", function() {
  return this.config.mode;
});

/**
 * Returns a connection metadata ready to open.
 *
 * @name clone
 * @function
 * @memberof vdba.Connection#
 * @abstract
 */
Connection.prototype.clone = function clone() {
  throw new Error("Abstract method.");
};

/**
 * Is it connected?
 *
 * @name connected
 * @type {Boolean}
 * @memberof vdba.Connection#
 * @abstract
 */
Connection.prototype.__defineGetter__("connected", function() {
  throw new Error("Abstract property.");
});

/**
 * The server object as connected.
 *
 * @name server
 * @type {vdba.Server}
 * @memberof vdba.Connection#
 * @abstract
 */
Connection.prototype.__defineGetter__("server", function() {
  throw new Error("Abstract property.");
});

/**
 * The current database.
 *
 * @name database
 * @type {vdba.Database}
 * @memberof vdba.Connection#
 * @abstract
 */
Connection.prototype.__defineGetter__("database", function() {
  throw new Error("Abstract property.");
});

/**
 * Opens the connection.
 *
 * @name open
 * @function
 * @memberof vdba.Connection#
 * @abstract
 *
 * @param {Function} [callback] The function to call: fn(error, db).
 *
 * @example
 * cx.open(function(error, db) { ... });
 */
Connection.prototype.open = function open() {
  throw new Error("Abstract method.");
};

/**
 * Closes the connection.
 *
 * @name close
 * @function
 * @memberof vdba.Connection#
 * @abstract
 *
 * @param {Function} [callback] The function to call: fn(error).
 *
 * @example
 * cx.close();
 * cx.close(function(error) { ... });
 */
Connection.prototype.close = function close() {
  throw new Error("Abstract method.");
};

/**
 * Runs a function into a transaction.
 *
 * @name runTransaction
 * @function
 * @memberof vdba.Connection#
 * @abstract
 *
 * @param {String} mode         The transaction mode: readonly or readwrite.
 * @param {Function} op         The operation to run into a transaction.
 * @param {Function} [callback] The function to call: fn(error).
 *
 * @example
 * cx.runTransaction("readonly", function(db) { ... });
 * cx.runTransaction("readonly", function(db) { ... }, function(error) { ... });
 */
Connection.prototype.runTransaction = function runTransaction() {
  throw new Error("Abstract method.");
};