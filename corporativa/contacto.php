<?php include('inc/header.php') ?>

<!-- Sub banner start -->
<div class="sub-banner overview-bgi">
    <div class="container">
        <div class="breadcrumb-area">
            <h1>Contacto Directo</h1>
          
        </div>
    </div>
</div>
<!-- Sub banner end -->


<!-- Contact 1 start -->
<div class="contact-1 content-area-7 contacto-pad">
    <div class="container">
        <div class="main-title">
            <h1>ESCRÍBENOS</h1>
        </div>

        <div class="row">
            <div class="col-lg-7 col-md-7 col-md-7">
                <form action="#" method="GET" enctype="multipart/form-data" id="contact-form" name="submit-to-google-sheet">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group name">
                                <input type="text" name="nombre" class="form-control" placeholder="Nombre">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group email">
                                <input type="email" name="correo" class="form-control" placeholder="Correo">
                            </div>
                        </div>
                     
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group number">
                                <input type="text" name="telefono" class="form-control" placeholder="Telefono">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                            <select  name="desarrollo" class="form-control select-contact" >
                                                <option disabled selected>Interés en Desarrollo [Seleccionar]</option>
                                                <option value="Plaza San Francisco (Cancún, Quintana Roo)">Plaza San Francisco (Cancún, Quintana Roo)</option>
                                                <option value="Plaza Santa Isabel (Saltillo, Coahuila)">Plaza Santa Isabel (Saltillo, Coahuila)</option>
                                                <option value="Torre Vetro (Monterrey, Nuevo León)">Torre Vetro (Monterrey, Nuevo León)</option>
                                                <option value="Cubik (San Pedro Garza Garcia, Nuevo León)">Cubik (San Pedro Garza Garcia, Nuevo León)</option>
                                            </select>
                            </div>
                        </div>


                       
                       
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group message">
                                <textarea class="form-control" name="mensaje" placeholder="Mensaje"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="send-btn">
                                <button type="submit" value="send" class="btn btn-color btn-md btn-message">Enviar Mensaje</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class=" offset-lg-1 col-lg-4 offset-md-0 col-md-5">
                <div class="contact-info">
                    <h3>Informacion</h3>
                    <div class="media">
                        <i class="fa fa-map-marker"></i>
                        <div class="media-body">
                            <h5 class="mt-0">Direccion</h5>
                            <p>Rio Tamazunchale 330 Norte, Del Valle, N.L. </p>
                        </div>
                    </div>
                    <div class="media">
                        <i class="fa fa-phone"></i>
                        <div class="media-body">
                            <h5 class="mt-0">Telefono</h5>
                            
                            <p>Telefono<a href="tel:8183562700">: (81) 8356-2700</a> </p>
                            <p>Celular<a href="tel:8113010712">: (81) 1301-0712</a> </p>
                   
                        </div>
                    </div>
                    <div class="media">
                         <i class="far fa-clock"></i>
                        <div class="media-body">
                            <h5 class="mt-0">Horarios</h5>
                            <p>Lunes a viernes: 9:30 a.m. a 7 p.m.</p>
                            <p>Sábados: 9:30 a.m. a 1 p.m.</p>
                            <p>Domingos: Cerrado</p>
                            
                        </div>
                    </div>
                    <div class="media mrg-btn-0">
                        <i class="fa fa-envelope"></i>
                        <div class="media-body">
                            <h5 class="mt-0">Email</h5>
                            <p><a href="#">ventas@desarrolloswel.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Contact 1 end -->

<!-- Google map start -->
<div class="section">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.092514881733!2d-100.36562697080666!3d25.659024798980212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bdee3d90de1f%3A0x16e492e11f330c53!2sR%C3%ADo+Tamazunchale+330%2C+Del+Valle%2C+66220+Monterrey%2C+N.L.!5e0!3m2!1sen!2smx!4v1541115915604" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
<!-- Google map end -->


<script>
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzJONPMEJ6EYyOqDlmG0mYEzoQ4-kfRMgYt7P-6qrV6Bu2iYFE9/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("Su mensaje ha sido enviado exitosamente."))
      .catch(error => console.error('Error!', error.message))
  })
</script>



<?php include('inc/footer.php') ?>