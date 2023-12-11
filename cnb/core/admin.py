from django.contrib import admin
<<<<<<< HEAD
from .models import Profesori, ExcelFile, Proiecte, Documente, Poze, Componente, Anunturi, Olimpici, Organizare_Clase, Consiliu, Consiliul_elevilor, Persoane_administrativ, Personal_administrativ, Contact_administrativ, Search_bar, Biblioteca, Anunturi_documente
=======
from .models import Profesori, ExcelFile, Proiecte, Documente, Poze, Componente, Anunturi, Olimpici, Organizare_Clase, Consiliu, Consiliul_elevilor, Persoane_administrativ, Personal_administrativ, Contact_administrativ, Search_bar, Biblioteca
>>>>>>> 2c395e77ad1deb0f0e5e1bc070a6512ea23e31d9

class ProfesoriAdmin(admin.ModelAdmin):
    search_fields = ['nume', 'prenume', 'catedra', 'titulatura', 'doctor']
    list_display = ['nume_complet', 'catedra', 'titulatura', 'doctor']

<<<<<<< HEAD
class Organizare_ClaseAdmin(admin.ModelAdmin):
    search_fields = ['diriginte', 'clasa', 'litera', 'sala']
    list_display = ['diriginte', 'clasa', 'litera', 'sala']

=======
>>>>>>> 2c395e77ad1deb0f0e5e1bc070a6512ea23e31d9
class ProiecteAdmin(admin.ModelAdmin):
    search_fields = ['titlu', 'tip']
    list_display = ['titlu', 'tip']

class PozeAdmin(admin.ModelAdmin):
    search_fields = ['model__titlu']
    
class ComponenteAdmin(admin.ModelAdmin):
    search_fields = ['model__titlu', 'subtitlu']
    
class DocumenteAdmin(admin.ModelAdmin):
<<<<<<< HEAD
    search_fields = ['model__titlu', 'document', 'nume']

class Anunturi_documenteAdmin(admin.ModelAdmin):
    search_fields = ['model__titlu', 'document', 'nume']

=======
    search_fields = ['model__titlu', 'document']
>>>>>>> 2c395e77ad1deb0f0e5e1bc070a6512ea23e31d9

admin.site.register(Profesori, ProfesoriAdmin)
admin.site.register(ExcelFile)
admin.site.register(Proiecte, ProiecteAdmin)
admin.site.register(Documente, DocumenteAdmin)
admin.site.register(Poze, PozeAdmin)
admin.site.register(Componente, ComponenteAdmin)
admin.site.register(Anunturi)
<<<<<<< HEAD
admin.site.register(Anunturi_documente, Anunturi_documenteAdmin)
admin.site.register(Olimpici)
admin.site.register(Organizare_Clase, Organizare_ClaseAdmin)
=======
admin.site.register(Olimpici)
admin.site.register(Organizare_Clase)
>>>>>>> 2c395e77ad1deb0f0e5e1bc070a6512ea23e31d9
admin.site.register(Consiliu)
admin.site.register(Consiliul_elevilor)
admin.site.register(Personal_administrativ)
admin.site.register(Persoane_administrativ)
admin.site.register(Contact_administrativ)
admin.site.register(Search_bar)
admin.site.register(Biblioteca)

