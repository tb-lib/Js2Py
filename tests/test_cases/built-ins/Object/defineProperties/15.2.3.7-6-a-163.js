// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-163
description: >
    Object.defineProperties - 'O' is an Array, 'P' is the length
    property of 'O', the [[Value]] field of 'desc' is less than value
    of  the length property, test the [[Writable]] attribute of the
    length property is set to false at last after deleting properties
    with large index named if the [[Writable]] field of 'desc' is
    false (15.4.5.1 step 3.i.ii)
includes: [runTestCase.js]
---*/

function testcase() {
    
        var arr = [0, 1];

        Object.defineProperties(arr, {
            length: {
                value: 1,
                writable: false
            }
        });

        arr.length = 10; //try to overwrite length value of arr
        return !arr.hasOwnProperty("1") && arr.length === 1 && arr[0] === 0;
    }
runTestCase(testcase);
