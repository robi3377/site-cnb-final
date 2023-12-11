from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticViewSitemap(Sitemap):

    def items(self):
        return ['index', 'catedre', 'contact', 'informatii', 'istoric', 'proiecte', 'anunturi', 'logopedie', 'consiliere', 'olimpici', 'biblioteca', 'oferta educationala']
    
    def location(self, item):
        return reverse(item)