
package model;

import static view.meio_GUI.altura_txt;
import static view.meio_GUI.comprimento_txt;
import static view.meio_GUI.area_txt;
import static view.meio_GUI.resultado_txt;
import static view.meio_GUI.quantidade_txt;

public class Bloco_DAO {

    public static void calcular() {

        double altura = Double.parseDouble(altura_txt.getText());
        double largura = Double.parseDouble(comprimento_txt.getText());

        double areaParede = altura * largura;

        double alturaBloco = 0.18;
        double comprimentoBloco = 0.38;

        double areaBloco = alturaBloco * comprimentoBloco;

        double blocos = Math.ceil(areaParede / areaBloco);

        area_txt.setText("Área da parede: " + areaParede + " m²");

        resultado_txt.setText("Área do bloco: " + areaBloco + " m²");

        quantidade_txt.setText("Serão necessários " + blocos + " blocos");

    }
}

