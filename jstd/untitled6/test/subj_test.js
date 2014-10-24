/**
 * Created with JetBrains PhpStorm.
 * User: Elena.Pogorelova
 * Date: 8/22/12
 * Time: 6:58 PM
 * To change this template use File | Settings | File Templates.
 */
TestCase("Subject Test", {

    "test greet add": function () {
        var subj= new Subject();
        var out =  subj.addition(1, 2, true);
        assertEquals(3, out);
    }
    ,
    "test greet add not counted":function () {
        var subj= new Subject();
        var out =  subj.addition(1, 2, false
        );
        console.log(out);
        assertEquals("", out);

    }
});
