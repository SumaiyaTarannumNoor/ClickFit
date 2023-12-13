const makeRequest = async(url, method) => {
    try{
        const result = await $.ajax({
            url: url,
            method: method,
            })
            return result;
        
    }catch(error){
        console.log(error)
    };
};  

const getData = () => {
    makeRequest("http://numbersapi.com/1/30/date?json", "GET").then(
        display = ('http://numbersapi.com/1/30/date?json', function(data){
            var info = '';
            $.each(data, function(key,value){
               
                info += '<td style="padding-left: 30px; padding-right: 30px;">'+ value +'</td>';
            
            });
            $('#info_table').append(info);
        })
    )};
getData();