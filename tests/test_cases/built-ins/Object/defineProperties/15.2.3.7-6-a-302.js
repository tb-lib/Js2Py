// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-302
description: >
    Object.defineProperties - 'O' is an Arguments object, 'P' is
    generic property, and 'desc' is data descriptor, test 'P' is
    defined in 'O' with all correct attribute values (10.6
    [[DefineOwnProperty]] step 4)
includes: [propertyHelper.js]
---*/

var arg = (function () {
    return arguments;
}(1, 2, 3));

Object.defineProperties(arg, {
    "genericProperty": {
        value: 1001,
        writable: true,
        enumerable: true,
        configurable: true
    }
});

verifyEqualTo(arg, "genericProperty", 1001);

verifyWritable(arg, "genericProperty");

verifyEnumerable(arg, "genericProperty");

verifyConfigurable(arg, "genericProperty");
