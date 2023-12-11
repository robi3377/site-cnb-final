from django.urls import path
from . import views

urlpatterns = [

<<<<<<< HEAD
    path('', views.index, name='index'),
    path('catedre', views.catedre, name='catedre'),
    path('contact', views.contact, name='contact'),
    path('informatii', views.informatii, name='informatii'),
    path('informatii/personal_administrativ/<str:pk>', views.personal_administrativ),
    path('informatii/<str:pk>', views.template_doc),
    path('istoric', views.istoric, name='istoric'),
    path('organizarea_claselor', views.organizarea_claselor),
    path('activitati_extrascolare', views.activitati_extrascolare),
    path('proiecte', views.proiecte, name='proiecte'),
=======
    path('', views.index),
    path('catedre', views.catedre),
    path('contact', views.contact),
    path('informatii', views.informatii),
    path('informatii/personal_administrativ/<str:pk>', views.personal_administrativ),
    path('informatii/<str:pk>', views.template_doc),
    path('istoric', views.istoric),
    path('organizarea_claselor', views.organizarea_claselor),
    path('activitati_extrascolare', views.activitati_extrascolare),
    path('proiecte', views.proiecte),
>>>>>>> 2c395e77ad1deb0f0e5e1bc070a6512ea23e31d9
    path('consiliul_elevilor_proiecte', views.proiecte_consiliul_elevilor),
    path('incarcare_proiect', views.incarcare_proiecte),
    path('modificare_proiect', views.modificare_proiect),
    path('prelucrare_excel', views.prelucrare_excel),
<<<<<<< HEAD
    path('anunturi', views.anunturi, name='anunturi'),
    path('logopedie', views.logopedie, name='logopedie'),
    path('consiliere', views.consiliere, name='consiliere'),
    path('concursuri_de_angajare', views.concursuri),
    path('olimpici', views.olimpici, name='olimpici'),
    path('biblioteca', views.biblioteca, name='biblioteca'),
    # path('biblioteca_carti<int:pk>', views.biblioteca_carti),
=======
    path('anunturi', views.anunturi),
    path('logopedie', views.logopedie),
    path('concursuri_de_angajare', views.concursuri),
    path('olimpici', views.olimpici),
    path('biblioteca', views.biblioteca),
    path('biblioteca_carti<int:pk>', views.biblioteca_carti),
    path('secretariat', views.administrativ),
>>>>>>> 2c395e77ad1deb0f0e5e1bc070a6512ea23e31d9
    path('proiecte/<str:pk>', views.template_proiecte),
    path('activitati_extrascolare/<str:pk>', views.template_proiecte),
    path('test', views.search_bar),
    # path('test_js', views.test_js),
    path('consiliul_administrativ', views.consiliu),
    path('consiliul_elevilor', views.consiliul_elevilor),
<<<<<<< HEAD
    path('oferta_educationala', views.oferta_educationala, name='oferta educationala'),
=======
    path('oferta_educationala', views.oferta_educationala),
>>>>>>> 2c395e77ad1deb0f0e5e1bc070a6512ea23e31d9
    path('404', views.not_found),

]