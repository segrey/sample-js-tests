TestCase('percentage tests', {
    'test 1/2':function () {
        assertEquals('50%', formatPercentage(1, 2));
    },

    'test 0/1':function () {
        assertEquals('0%', formatPercentage(0, 1));
    },

    'test 1/1':function () {
        assertEquals('100%', formatPercentage(1, 1));
    },

    'test illegal arguments':function () {
        expectAsserts(1);
        try {
            formatPercentage('', 10);
        } catch (e) {
            assertTrue(true);
        }
    }
});
