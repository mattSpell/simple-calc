(function(){
  'use strict';

  $(document).ready(initialize);
    function initialize(){
      $('#add').click(add);
      $('#sub').click(sub);
      $('#mul').click(mul);
      $('#div').click(div);
      $('#exp').click(exp);
      $('#sqrt').click(sqrt);
      $('#fact').click(fact);
    }

    function add(){
      var values = getNums();
      var answer1 = values[0] + values[1];
      display(answer1);
    }

    function sub(){
      var values = getNums();
      var answer1 = values[0] - values[1];
      display(answer1);
    }

    function mul(){
      var values = getNums();
      var answer1 = values[0] * values[1];
      display(answer1);
    }

    function div(){
      var values = getNums();
      var answer1 = values[0] / values[1];
      display(answer1);
    }

    function exp(){
      var values = getNums();
      var answer1 = Math.pow(values[0], values[1]);
      display(answer1);
    }

    function sqrt(){
      var z = getOne();
      var answer2 = Math.sqrt(z[0]);
      display2(answer2);
    }

    function fact(){
      var z = getOne();
      var answer2 = z[0];
      if(z > 0){
        for(var i = z[0]; i > 1; i--){
          answer2 = answer2 * (i-1);
        }
      } else {
        answer2 = 1;
        }
        display2(answer2);
      }
    

    function getNums(){
      var x = $('#num1').val() * 1;
      var y = $('#num2').val() * 1;
      return [x, y];
    }

    function getOne(){
      var z = $('#num3').val() * 1;
      return [z];
    }

    function display(answer1){
      $('#answer1').text(answer1);
    }

    function display2(answer2){
      $('#answer2').text(answer2);
    }

})();
