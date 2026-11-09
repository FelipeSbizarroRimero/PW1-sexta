package model;

import view.meio_GUI;
import javax.swing.JFrame;

public class BemVindo_DAO {
    public static void avancarParaCalculo(JFrame telaAtual) {
        meio_GUI telaMeio = new meio_GUI();
        telaMeio.setVisible(true);
        telaAtual.dispose();
    }
}
