	var dataJson = new Array();
    var showing = 0 ;
    var idarea = 0;
    var area;
	function json(){
		var list_visible = $("#pacientes").is(":visible");
			$(".result-count").html("cargando...");
            for(var i in dataJson){
                showing++;
            	$("#element_listPacientes").append($("<li>").append($("<a>").attr({'title':dataJson[i].servicio,'href':'javascript:area('+dataJson[i].id+')'}).text(dataJson[i].servicio)));	
            }
            $(".result-count").html("Mostrando "+showing);
            if (list_visible) {
					$("#element_listPacientes").listview("refresh");
			}
    };
    function areaAnterior(){
        var list_visible = $("#pacientes").is(":visible");
        showing=0;
        $.ajax({
                    async:true,
                    type: "json",
                    url: "http://10.17.1.200/Symfony/web/app.php/API/Pacientes/Areas/"+window.idarea,
                    beforeSend: function(){
                        $(".result-count").html("cargando...");

                    },
                    success: function(datos){
                        dataJson = eval(datos);

                        $("#element_listPacientes").empty();
                        $("#element_listPacientes").html('<li data-role="list-divider">Area</li>');
                        for(var i in dataJson){
                            showing++;
                            $("#element_listPacientes").append($("<li>").append($("<a>").attr({'title':dataJson[i].servicio,'href':'javascript:Pacientes("'+dataJson[i].servicio+'")'}).text(dataJson[i].servicio)));
                        };
                        $(".result-count").html("Mostrando "+showing);
                        if (list_visible) {
                                $("#element_listPacientes").listview("refresh");
                        }
                    },
                    error: function (obj, error, objError){
                    }
        });
    };
    function area(idarea){
        window.idarea=idarea;
        var list_visible = $("#pacientes").is(":visible");
        showing=0;
    	$.ajax({
                    async:true,
                    type: "json",
                    url: "http://10.17.1.200/Symfony/web/app.php/API/Pacientes/Areas/"+idarea,
                    beforeSend: function(){
                        $(".result-count").html("cargando...");
                    },
                    success: function(datos){
                        dataJson = eval(datos);

                        $("#element_listPacientes").empty();
                        $("#element_listPacientes").html('<li data-role="list-divider">Area</li>');
                        for(var i in dataJson){
                            showing++;
                            $("#element_listPacientes").append($("<li>").append($("<a>").attr({'title':dataJson[i].servicio,'href':'javascript:Pacientes("'+dataJson[i].servicio+'")'}).text(dataJson[i].servicio)));
                        };
                        $(".result-count").html("Mostrando "+showing);
                        if (list_visible) {
                                $("#element_listPacientes").listview("refresh");
                        }
                    },
                    error: function (obj, error, objError){
                    }
		});
    };
    function Pacientes(area){
        area=area;
        var list_visible = $("#pacientes").is(":visible");
        showing=0;
        $.ajax({
                    async:true,
                    type: "json",
                    url: "http://10.17.1.200/Symfony/web/app.php/API/Pacientes/Pacientes/"+area,
                    beforeSend: function(){
                        $(".result-count").html("cargando...");
                    },
                    success: function(datos){
                        dataJson = eval(datos);
                        if (window.dataJson==0) {
                            $(".result-count").text("NO HAY PACIENTES").addClass( "mensaje");
                            setTimeout(function() {
                                $(".result-count").removeClass( "mensaje" );
                            }, 1500 );
                        }else{
                            $("#element_listPacientes").empty();
                            $("#element_listPacientes").html('<li data-role="list-divider">Pacientes</li>');
                            for(var i in dataJson){
                                showing++;
                                $("#element_listPacientes").append($("<li>").html('<a href="javascript:Instrucciones(\''+dataJson[i].idPaciente+'\')" data-rel="popup">'+dataJson[i].paciente+'</a>'));
                            };
                            $(".result-count").html("Mostrando "+showing);
                            if (list_visible) {
                                    $("#element_listPacientes").listview("refresh");
                            };
                        };
                    },
                    error: function (obj, error, objError){
                    }
        });
    };
    function Instrucciones(idPaciente)
    {
        var list_visible = $("#pacientes").is(":visible");
        $.ajax({
                    async:true,
                    type: "json",
                    url: "http://10.17.1.200/Symfony/web/app.php/API/Pacientes/Instrucciones/"+idPaciente,
                    beforeSend: function(){
                        $(".result-count").html("cargando...");
                    },
                    success: function(datos){
                        dataJson = eval(datos);
                        if (window.dataJson==0) {
                            $("#popupBasic p").text("NO HAY DATOS PARA ESTE PACIENTE.");
                            $( "#popupBasic" ).popup( "open" );
                            $(".result-count").text("No hay datos para este paciente.");
                        }else{
                            $("#popupBasic p").html(
                                "Dieta: "+dataJson[0].Dieta+"<br/>"+
                                "Solucion: "+dataJson[0].Solucion+"<br/>"+
                                "Comentarios: "+dataJson[0].Comentarios+"<br/>"+
                                "Presentacion: "+dataJson[0].Presentacion+"<br/>"+
                                "FolioIndicacion: "+dataJson[0].FolioIndicacion+"<br/>"+
                                "Cantidad: "+dataJson[0].Cantidad+"<br/>"+
                                "Metodo: "+dataJson[0].Metodo+"<br/>"+
                                "Tomas: "+dataJson[0].Tomas+"<br/>"+
                                "Estatus: "+dataJson[0].Estatus
                                );
                            $( "#popupBasic" ).popup( "open" );
                            $(".result-count").html("Mostrando "+showing);
                            if (list_visible) {
                                    $("#popupBasic").listview("refresh");
                            };
                        };
                    },
                    error: function (obj, error, objError){
                    }
        });
    };
    function servicios(){
        var list_visible = $("#pacientes").is(":visible");
        showing=0;
        $.ajax({
                    async:true,
                    type: "json",
                    url: "http://10.17.1.200/Symfony/web/app.php/API/Pacientes/Servicios",
                    beforeSend: function(){
                        $(".result-count").html("cargando...");
                    },
                    success: function(datos){
                        dataJson = eval(datos);
                        $("#element_listPacientes").empty();
                        $("#element_listPacientes").html('<li data-role="list-divider">Servicios</li>');
                        for(var i in dataJson){
                            showing++;
                            $("#element_listPacientes").append($("<li>").append($("<a>").attr({'title':dataJson[i].servicio,'href':'javascript:area('+dataJson[i].id+')'}).text(dataJson[i].servicio)));
                        };
                        $(".result-count").html("Mostrando "+showing);
                        if (list_visible) {
                                $("#element_listPacientes").listview("refresh");
                        };
                    },
        });
    };

	$("#pacientes").live("pageshow",function(){
		$.ajax({
                async:true,
                type: "json",
                url: "http://10.17.1.200/Symfony/web/app.php/API/Pacientes/Servicios",
                 beforeSend: function(){
                },
                success: function(datos){
                    dataJson = eval(datos);
                    json();
                    
                },
                error: function (obj, error, objError){
                }
		});
		$("#servicio").on("click",function(){
       		servicios();
        });
        $("#area").on("click",function(){
            areaAnterior();
        });
	});
	function showBebes(){
		var list_visible = $("#bebes").is(":visible");
        var caption = "ver imagen";
			$(".result-count").html("cargando...");
            for(var i in dataJson){
                showing++;
            	$("#element_listBebes").append($("<li>").append(
                $("<a>").attr("href","#").append(
                $("<img>").attr("src",'bebe2.jpg')).append("<h3>"+dataJson[i].mama+"</h3>").append(
                	"<p>madre: "+dataJson[i].mama+
                    " fecha Nacimiento: "+dataJson[i].fecha+
                    " sexo: "+dataJson[i].sexo+
                    " peso: "+dataJson[i].peso+
                    " longitud: "+dataJson[i].longitud+"</p>"
                    )));
            }

            $(".result-count").html("Mostrando "+showing);
            if (list_visible) {
					$("#element_listBebes").listview("refresh");
			}
	}
	$("#bebes").live("pageshow",function(){
		$.ajax({
                    async:true,
                    type: "json",
                     url: "http://10.17.1.200/Symfony/web/app.php/API/bebes",
                     beforeSend: function(){
                    },
                    success: function(datos){
                        dataJson = eval(datos);
                        showBebes();
                        
                    },
                    error: function (obj, error, objError){
                    }
			});
	});








	var instagram_client_id = "fc8041d4af1544a2939c3f5a9a1ef8cf";

		function getPhotos(){
			var map_visible = $("#map").is(":visible");
			var list_visible = $("#list").is(":visible");

			var tag = "";

			if (list_visible) {
				$("#list .tag").val();	
			} else if (map_visible) {
				$("#map .tag").val();	
			}
			
			if (tag == "") {
				tag = "instafood";
			}

			tag = tag.replace(/(# |)/g,"");
			$(".search-button").addClass("ui-disabled");
			$(".result-count").html("cargando...");

			if (list_visible) {
				$("#element_list").empty();	
			} else if (map_visible) {
				$("#map_canvas").gmap("clear","markers");
			}
			
			var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=" + instagram_client_id + "&callback=?";
			$.getJSON(url, function(data){
				var data_elements = data["data"];
				var showing = 0;


				$.each(data_elements, function(index, current_element){			
					var thumbnail = current_element["images"]["thumbnail"]["url"];
					var caption = "ver imagen";

					if (current_element["caption"] != null) {
						caption = current_element["caption"]["text"];
					}

					var link = current_element["link"];

					if (list_visible) {
						showing++;
						$("#element_list").append(
							$("<li>").append(
								$("<a>").attr("href",link).append(
									$("<img>").attr("src",thumbnail)).append(caption)
									)
							);						
					} else if (map_visible && current_element["location"] != null) {
						showing++;
						var lat = current_element["location"]["latitude"];
						var lng = current_element["location"]["longitude"];
						var position = new google.maps.LatLng(lat,lng);

						var info_window = $('<span>').append(
												$('<img>').attr('src',thumbnail)).append(
													$('<br>')).append(
														$('<a>').attr('href',link).text(caption)).html();					
						$('#map_canvas').gmap('addMarker', {'position': position}).click(function(){
							 $('#map_canvas').gmap('openInfoWindow', {'content': info_window}, this);
						 	 $('#map_canvas').gmap('getMap').panTo(position);
						});							
					}
				});
				if (list_visible) {
					$("#element_list").listview("refresh");	
				}
				
				$(".search-button").removeClass("ui-disabled");
				$(".result-count").html("Mostrando " + showing + " resultados para #" + tag);

			});

		}

		function locationSuccess(position) {			
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;
			var center = new google.maps.LatLng(lat,lng);

			$("#map_canvas").gmap({'center':center,'zoom':5});
			getPhotos();
		}

		function locationError(error) {
			$("#map_canvas").gmap({'zoom':2});	
			getPhotos();
		}

		$("#map").live("pageshow",function(){
			if (navigator.geolocation) {				
				navigator.geolocation.getCurrentPosition(
					locationSuccess, locationError, {enableHighAccuracy: true});
			}
		});

		$("#list").live("pageshow",function(){
			getPhotos();
		});
		